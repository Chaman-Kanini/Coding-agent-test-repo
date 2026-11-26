using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using TaskTracker.Application.Interfaces;

namespace TaskTracker.Tests;

public class SmokeTests(WebApplicationFactory<Program> factory) : IClassFixture<WebApplicationFactory<Program>>
{
    [Fact]
    public async Task Health_answers_ok()
    {
        var response = await factory.CreateClient().GetAsync("/health");
        Assert.True(response.IsSuccessStatusCode);
    }

    [Fact]
    public void Every_module_service_is_registered()
    {
        using var scope = factory.Services.CreateScope();
        Assert.NotNull(scope.ServiceProvider.GetService<ITaskItemService>());
        Assert.NotNull(scope.ServiceProvider.GetService<ITeamMemberService>());
        Assert.NotNull(scope.ServiceProvider.GetService<ILabelService>());
    }

    [Fact]
    public void The_domain_has_its_entities()
    {
        Assert.NotNull(typeof(TaskTracker.Domain.Entities.TaskItem));
        Assert.NotNull(typeof(TaskTracker.Domain.Entities.TeamMember));
        Assert.NotNull(typeof(TaskTracker.Domain.Entities.Label));
    }
}
