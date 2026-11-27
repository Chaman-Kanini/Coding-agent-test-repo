namespace ECommercePlatform.Domain.Entities;

public class Cart
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }
}
