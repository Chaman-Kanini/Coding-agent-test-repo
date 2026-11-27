using Microsoft.AspNetCore.Mvc;

namespace ECommercePlatform.Api.Middleware;

public class ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (NotImplementedException)
        {
            await Write(context, StatusCodes.Status501NotImplemented, "Not implemented");
        }
        catch (Exception error)
        {
            logger.LogError(error, "Unhandled error on {Path}", context.Request.Path);
            await Write(context, StatusCodes.Status500InternalServerError, "Unexpected error");
        }
    }

    private static Task Write(HttpContext context, int status, string title)
    {
        context.Response.StatusCode = status;
        return context.Response.WriteAsJsonAsync(new ProblemDetails { Status = status, Title = title });
    }
}
