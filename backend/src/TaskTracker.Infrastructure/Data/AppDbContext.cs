using Microsoft.EntityFrameworkCore;
using TaskTracker.Domain.Entities;

namespace TaskTracker.Infrastructure.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<TaskItem> TaskItems => Set<TaskItem>();
    public DbSet<TeamMember> TeamMembers => Set<TeamMember>();
    public DbSet<Label> Labels => Set<Label>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TaskItem>().ToTable("task_items");
        modelBuilder.Entity<TeamMember>().ToTable("team_members");
        modelBuilder.Entity<Label>().ToTable("labels");
    }
}
