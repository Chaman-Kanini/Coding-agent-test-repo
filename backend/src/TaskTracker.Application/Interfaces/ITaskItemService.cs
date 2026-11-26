namespace TaskTracker.Application.Interfaces;

public interface ITaskItemService
{
    Task<IReadOnlyList<Domain.Entities.TaskItem>> ListTaskItemsAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.TaskItem?> GetTaskItemAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.TaskItem> CreateTaskItemAsync(Domain.Entities.TaskItem taskItem, CancellationToken cancellationToken);
    Task<Domain.Entities.TaskItem> UpdateTaskItemAsync(Guid id, Domain.Entities.TaskItem taskItem, CancellationToken cancellationToken);
    Task DeleteTaskItemAsync(Guid id, CancellationToken cancellationToken);
}
