using Microsoft.AspNetCore.Mvc;
using ECommercePlatform.Application.Interfaces;

namespace ECommercePlatform.Api.Controllers;

[ApiController]
public class ProductsController(IProductService service) : ControllerBase
{
    [HttpGet("/api/products")]
    public Task<IActionResult> ListProducts(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/products/{id:guid}")]
    public Task<IActionResult> GetProduct(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/products")]
    public Task<IActionResult> CreateProduct([FromBody] Domain.Entities.Product body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/products/{id:guid}")]
    public Task<IActionResult> UpdateProduct(Guid id, [FromBody] Domain.Entities.Product body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/products/{id:guid}")]
    public Task<IActionResult> DeleteProduct(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
