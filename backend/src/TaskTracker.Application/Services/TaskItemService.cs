using TaskTracker.Application.Interfaces;

namespace TaskTracker.Application.Services;

public class TaskItemService : ITaskItemService
{
    public Task<IReadOnlyList<Domain.Entities.TaskItem>> ListTaskItemsAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.TaskItem?> GetTaskItemAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.TaskItem> CreateTaskItemAsync(Domain.Entities.TaskItem taskItem, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.TaskItem> UpdateTaskItemAsync(Guid id, Domain.Entities.TaskItem taskItem, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteTaskItemAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
