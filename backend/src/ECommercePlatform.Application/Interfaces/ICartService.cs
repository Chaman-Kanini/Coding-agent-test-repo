namespace ECommercePlatform.Application.Interfaces;

public interface ICartService
{
    Task<IReadOnlyList<Domain.Entities.Cart>> ListCartsAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.Cart?> GetCartAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.Cart> CreateCartAsync(Domain.Entities.Cart entity, CancellationToken cancellationToken);
    Task<Domain.Entities.Cart> UpdateCartAsync(Guid id, Domain.Entities.Cart entity, CancellationToken cancellationToken);
    Task DeleteCartAsync(Guid id, CancellationToken cancellationToken);
}
