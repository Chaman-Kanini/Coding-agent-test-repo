namespace TaskTracker.Application.Interfaces;

public interface ITeamMemberService
{
    Task<IReadOnlyList<Domain.Entities.TeamMember>> ListTeamMembersAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.TeamMember?> GetTeamMemberAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.TeamMember> CreateTeamMemberAsync(Domain.Entities.TeamMember teamMember, CancellationToken cancellationToken);
    Task<Domain.Entities.TeamMember> UpdateTeamMemberAsync(Guid id, Domain.Entities.TeamMember teamMember, CancellationToken cancellationToken);
    Task DeleteTeamMemberAsync(Guid id, CancellationToken cancellationToken);
}
