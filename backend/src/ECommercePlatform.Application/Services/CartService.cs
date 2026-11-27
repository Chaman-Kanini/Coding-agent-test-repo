using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Application.Services;

public class CartService : ICartService
{
    public Task<IReadOnlyList<Domain.Entities.Cart>> ListCartsAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Cart?> GetCartAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Cart> CreateCartAsync(Domain.Entities.Cart entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Cart> UpdateCartAsync(Guid id, Domain.Entities.Cart entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteCartAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
