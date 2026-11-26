namespace TaskTracker.Domain.Entities;

public class Label
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Colour { get; set; }
}
