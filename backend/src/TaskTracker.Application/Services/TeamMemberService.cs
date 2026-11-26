using TaskTracker.Application.Interfaces;

namespace TaskTracker.Application.Services;

public class TeamMemberService : ITeamMemberService
{
    public Task<IReadOnlyList<Domain.Entities.TeamMember>> ListTeamMembersAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.TeamMember?> GetTeamMemberAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.TeamMember> CreateTeamMemberAsync(Domain.Entities.TeamMember teamMember, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.TeamMember> UpdateTeamMemberAsync(Guid id, Domain.Entities.TeamMember teamMember, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteTeamMemberAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
