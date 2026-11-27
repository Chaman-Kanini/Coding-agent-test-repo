using Microsoft.AspNetCore.Mvc;
using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Api.Controllers;

[ApiController]
public class CartsController(ICartService service) : ControllerBase
{
    [HttpGet("/api/carts")]
    public Task<IActionResult> ListCarts(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/carts/{id:guid}")]
    public Task<IActionResult> GetCart(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/carts")]
    public Task<IActionResult> CreateCart([FromBody] Domain.Entities.Cart body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/carts/{id:guid}")]
    public Task<IActionResult> UpdateCart(Guid id, [FromBody] Domain.Entities.Cart body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/carts/{id:guid}")]
    public Task<IActionResult> DeleteCart(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
