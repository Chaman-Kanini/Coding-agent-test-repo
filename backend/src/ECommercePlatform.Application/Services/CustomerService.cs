using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Application.Services;

public class CustomerService : ICustomerService
{
    public Task<IReadOnlyList<Domain.Entities.Customer>> ListCustomersAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Customer?> GetCustomerAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Customer> CreateCustomerAsync(Domain.Entities.Customer entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task<Domain.Entities.Customer> UpdateCustomerAsync(Guid id, Domain.Entities.Customer entity, CancellationToken cancellationToken) => throw new NotImplementedException();
    public Task DeleteCustomerAsync(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
