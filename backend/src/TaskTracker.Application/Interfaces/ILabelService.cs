namespace TaskTracker.Application.Interfaces;

public interface ILabelService
{
    Task<IReadOnlyList<Domain.Entities.Label>> ListLabelsAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.Label?> GetLabelAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.Label> CreateLabelAsync(Domain.Entities.Label label, CancellationToken cancellationToken);
    Task<Domain.Entities.Label> UpdateLabelAsync(Guid id, Domain.Entities.Label label, CancellationToken cancellationToken);
    Task DeleteLabelAsync(Guid id, CancellationToken cancellationToken);
}
