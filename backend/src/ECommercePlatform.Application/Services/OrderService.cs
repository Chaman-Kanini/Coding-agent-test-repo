using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Application.Services;

public class OrderService : IOrderService
{
    public Task<IReadOnlyList<Domain.Entities.Order>> ListOrdersAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Order?> GetOrderAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Order> CreateOrderAsync(Domain.Entities.Order entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Order> UpdateOrderAsync(Guid id, Domain.Entities.Order entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteOrderAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
