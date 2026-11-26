using TaskTracker.Application.Interfaces;

namespace TaskTracker.Application.Services;

public class LabelService : ILabelService
{
    public Task<IReadOnlyList<Domain.Entities.Label>> ListLabelsAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Label?> GetLabelAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Label> CreateLabelAsync(Domain.Entities.Label label, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Label> UpdateLabelAsync(Guid id, Domain.Entities.Label label, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteLabelAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
