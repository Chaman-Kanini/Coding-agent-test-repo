namespace ECommercePlatform.Application.Interfaces;

public interface IOrderItemService
{
    Task<IReadOnlyList<Domain.Entities.OrderItem>> ListOrderItemsAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.OrderItem?> GetOrderItemAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.OrderItem> CreateOrderItemAsync(Domain.Entities.OrderItem entity, CancellationToken cancellationToken);
    Task<Domain.Entities.OrderItem> UpdateOrderItemAsync(Guid id, Domain.Entities.OrderItem entity, CancellationToken cancellationToken);
    Task DeleteOrderItemAsync(Guid id, CancellationToken cancellationToken);
}
