using Microsoft.Extensions.DependencyInjection;
using ECommercePlatform.Application.Interfaces;
using ECommercePlatform.Application.Services;

namespace ECommercePlatform.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<ICustomerService, CustomerService>();
        services.AddScoped<IOrderService, OrderService>();
        services.AddScoped<IOrderItemService, OrderItemService>();
        services.AddScoped<ICartService, CartService>();
        return services;
    }
}
