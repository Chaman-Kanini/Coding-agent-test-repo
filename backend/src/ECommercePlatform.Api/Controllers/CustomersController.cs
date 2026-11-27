using Microsoft.AspNetCore.Mvc;
using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Api.Controllers;

[ApiController]
public class CustomersController(ICustomerService service) : ControllerBase
{
    [HttpGet("/api/customers")]
    public Task<IActionResult> ListCustomers(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/customers/{id:guid}")]
    public Task<IActionResult> GetCustomer(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/customers")]
    public Task<IActionResult> CreateCustomer([FromBody] Domain.Entities.Customer body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/customers/{id:guid}")]
    public Task<IActionResult> UpdateCustomer(Guid id, [FromBody] Domain.Entities.Customer body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/customers/{id:guid}")]
    public Task<IActionResult> DeleteCustomer(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
