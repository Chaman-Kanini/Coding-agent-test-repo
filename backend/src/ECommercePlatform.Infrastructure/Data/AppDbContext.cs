using Microsoft.EntityFrameworkCore;

namespace ECommercePlatform.Infrastructure.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Domain.Entities.Product> Products => Set<Domain.Entities.Product>();
    public DbSet<Domain.Entities.Customer> Customers => Set<Domain.Entities.Customer>();
    public DbSet<Domain.Entities.Order> Orders => Set<Domain.Entities.Order>();
    public DbSet<Domain.Entities.OrderItem> OrderItems => Set<Domain.Entities.OrderItem>();
    public DbSet<Domain.Entities.Cart> Carts => Set<Domain.Entities.Cart>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Domain.Entities.Product>().ToTable("products");
        modelBuilder.Entity<Domain.Entities.Customer>().ToTable("customers");
        modelBuilder.Entity<Domain.Entities.Order>().ToTable("orders");
        modelBuilder.Entity<Domain.Entities.OrderItem>().ToTable("order_items");
        modelBuilder.Entity<Domain.Entities.Cart>().ToTable("carts");
    }
}
