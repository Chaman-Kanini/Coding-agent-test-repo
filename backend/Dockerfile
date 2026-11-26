FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish src/TaskTracker.Api/TaskTracker.Api.csproj -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /out .
USER app
ENTRYPOINT ["dotnet", "TaskTracker.Api.dll"]
