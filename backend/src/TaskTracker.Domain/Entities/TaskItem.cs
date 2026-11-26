namespace TaskTracker.Domain.Entities;

public class TaskItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool? IsDone { get; set; }
    public DateOnly? DueDate { get; set; }
    public DateTimeOffset? CreatedAt { get; set; }
}
