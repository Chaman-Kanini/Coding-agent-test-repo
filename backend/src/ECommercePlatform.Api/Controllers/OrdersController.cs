using Microsoft.AspNetCore.Mvc;
using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Api.Controllers;

[ApiController]
public class OrdersController(IOrderService service) : ControllerBase
{
    [HttpGet("/api/orders")]
    public Task<IActionResult> ListOrders(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/orders/{id:guid}")]
    public Task<IActionResult> GetOrder(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/orders")]
    public Task<IActionResult> CreateOrder([FromBody] Domain.Entities.Order body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/orders/{id:guid}")]
    public Task<IActionResult> UpdateOrder(Guid id, [FromBody] Domain.Entities.Order body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/orders/{id:guid}")]
    public Task<IActionResult> DeleteOrder(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
