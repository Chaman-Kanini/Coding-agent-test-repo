using Microsoft.AspNetCore.Mvc;
using TaskTracker.Application.Interfaces;

namespace TaskTracker.Api.Controllers;

[ApiController]
public class LabelsController(ILabelService service) : ControllerBase
{
    [HttpGet("/api/labels")]
    public Task<IActionResult> ListLabels(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/labels/{id:guid}")]
    public Task<IActionResult> GetLabel(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/labels")]
    public Task<IActionResult> CreateLabel([FromBody] Domain.Entities.Label body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/labels/{id:guid}")]
    public Task<IActionResult> UpdateLabel(Guid id, [FromBody] Domain.Entities.Label body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/labels/{id:guid}")]
    public Task<IActionResult> DeleteLabel(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
