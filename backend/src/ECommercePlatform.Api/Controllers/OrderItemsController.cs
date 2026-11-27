using Microsoft.AspNetCore.Mvc;
using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Api.Controllers;

[ApiController]
public class OrderItemsController(IOrderItemService service) : ControllerBase
{
    [HttpGet("/api/order-items")]
    public Task<IActionResult> ListOrderItems(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/order-items/{id:guid}")]
    public Task<IActionResult> GetOrderItem(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/order-items")]
    public Task<IActionResult> CreateOrderItem([FromBody] Domain.Entities.OrderItem body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/order-items/{id:guid}")]
    public Task<IActionResult> UpdateOrderItem(Guid id, [FromBody] Domain.Entities.OrderItem body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/order-items/{id:guid}")]
    public Task<IActionResult> DeleteOrderItem(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
