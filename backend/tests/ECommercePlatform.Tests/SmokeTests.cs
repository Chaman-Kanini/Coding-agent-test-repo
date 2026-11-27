using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Tests;

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
        Assert.NotNull(scope.ServiceProvider.GetService<IProductService>());
        Assert.NotNull(scope.ServiceProvider.GetService<ICustomerService>());
        Assert.NotNull(scope.ServiceProvider.GetService<IOrderService>());
        Assert.NotNull(scope.ServiceProvider.GetService<IOrderItemService>());
        Assert.NotNull(scope.ServiceProvider.GetService<ICartService>());
    }

    [Fact]
    public void The_domain_has_its_entities()
    {
        Assert.NotNull(typeof(ECommercePlatform.Domain.Entities.Product));
        Assert.NotNull(typeof(ECommercePlatform.Domain.Entities.Customer));
        Assert.NotNull(typeof(ECommercePlatform.Domain.Entities.Order));
        Assert.NotNull(typeof(ECommercePlatform.Domain.Entities.OrderItem));
        Assert.NotNull(typeof(ECommercePlatform.Domain.Entities.Cart));
    }
}
