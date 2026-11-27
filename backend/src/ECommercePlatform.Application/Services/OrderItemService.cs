using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Application.Services;

public class OrderItemService : IOrderItemService
{
    public Task<IReadOnlyList<Domain.Entities.OrderItem>> ListOrderItemsAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.OrderItem?> GetOrderItemAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.OrderItem> CreateOrderItemAsync(Domain.Entities.OrderItem entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.OrderItem> UpdateOrderItemAsync(Guid id, Domain.Entities.OrderItem entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteOrderItemAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
