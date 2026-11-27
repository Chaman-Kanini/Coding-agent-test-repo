namespace ECommercePlatform.Application.Interfaces;

public interface IOrderService
{
    Task<IReadOnlyList<Domain.Entities.Order>> ListOrdersAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.Order?> GetOrderAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.Order> CreateOrderAsync(Domain.Entities.Order entity, CancellationToken cancellationToken);
    Task<Domain.Entities.Order> UpdateOrderAsync(Guid id, Domain.Entities.Order entity, CancellationToken cancellationToken);
    Task DeleteOrderAsync(Guid id, CancellationToken cancellationToken);
}
