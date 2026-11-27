namespace ECommercePlatform.Domain.Entities;

public class Order
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public string Status { get; set; } = string.Empty;
    public decimal? Total { get; set; }
    public DateTimeOffset? PlacedAt { get; set; }
}
