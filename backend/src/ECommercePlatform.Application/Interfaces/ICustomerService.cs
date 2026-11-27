namespace ECommercePlatform.Application.Interfaces;

public interface ICustomerService
{
    Task<IReadOnlyList<Domain.Entities.Customer>> ListCustomersAsync(CancellationToken cancellationToken);
    Task<Domain.Entities.Customer?> GetCustomerAsync(Guid id, CancellationToken cancellationToken);
    Task<Domain.Entities.Customer> CreateCustomerAsync(Domain.Entities.Customer entity, CancellationToken cancellationToken);
    Task<Domain.Entities.Customer> UpdateCustomerAsync(Guid id, Domain.Entities.Customer entity, CancellationToken cancellationToken);
    Task DeleteCustomerAsync(Guid id, CancellationToken cancellationToken);
}
