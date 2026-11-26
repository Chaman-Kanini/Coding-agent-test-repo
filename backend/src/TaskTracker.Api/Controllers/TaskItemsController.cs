using Microsoft.AspNetCore.Mvc;
using TaskTracker.Application.Interfaces;

namespace TaskTracker.Api.Controllers;

[ApiController]
public class TaskItemsController(ITaskItemService service) : ControllerBase
{
    [HttpGet("/api/task-items")]
    public Task<IActionResult> ListTaskItems(CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpGet("/api/task-items/{id:guid}")]
    public Task<IActionResult> GetTaskItem(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPost("/api/task-items")]
    public Task<IActionResult> CreateTaskItem([FromBody] Domain.Entities.TaskItem body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpPut("/api/task-items/{id:guid}")]
    public Task<IActionResult> UpdateTaskItem(Guid id, [FromBody] Domain.Entities.TaskItem body, CancellationToken cancellationToken) => throw new NotImplementedException();

    [HttpDelete("/api/task-items/{id:guid}")]
    public Task<IActionResult> DeleteTaskItem(Guid id, CancellationToken cancellationToken) => throw new NotImplementedException();
}
