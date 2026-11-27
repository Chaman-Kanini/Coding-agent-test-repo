using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Application.Services;

public class ProductService : IProductService
{
    public Task<IReadOnlyList<Domain.Entities.Product>> ListProductsAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Product?> GetProductAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Product> CreateProductAsync(Domain.Entities.Product entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Product> UpdateProductAsync(Guid id, Domain.Entities.Product entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteProductAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
