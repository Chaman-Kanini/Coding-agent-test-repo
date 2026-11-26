using Microsoft.AspNetCore.Mvc;
using TaskTracker.Application.Interfaces;

namespace TaskTracker.Api.Controllers;

[ApiController]
public class TeamMembersController(ITeamMemberService service) : ControllerBase
{
    [HttpGet("/api/team-members")]
    public Task<IActionResult> ListTeamMembers(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/team-members/{id:guid}")]
    public Task<IActionResult> GetTeamMember(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/team-members")]
    public Task<IActionResult> CreateTeamMember([FromBody] Domain.Entities.TeamMember body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/team-members/{id:guid}")]
    public Task<IActionResult> UpdateTeamMember(Guid id, [FromBody] Domain.Entities.TeamMember body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/team-members/{id:guid}")]
    public Task<IActionResult> DeleteTeamMember(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
