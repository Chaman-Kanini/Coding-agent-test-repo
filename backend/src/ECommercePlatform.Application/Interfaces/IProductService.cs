namespace ECommercePlatform.Application.Interfaces;

public interface IProductService
{
    Task<IReadOnlyList<Domain.Entities.Product>> ListProductsAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.Product?> GetProductAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.Product> CreateProductAsync(Domain.Entities.Product entity, CancellationToken cancellationToken);
    Task<Domain.Entities.Product> UpdateProductAsync(Guid id, Domain.Entities.Product entity, CancellationToken cancellationToken);
    Task DeleteProductAsync(Guid id, CancellationToken cancellationToken);
}
