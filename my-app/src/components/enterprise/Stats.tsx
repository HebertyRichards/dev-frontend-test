import { stats } from "@/data/enterprise";

export function Stats() {
  return (
    <section className="bg-card py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Resultados conquistados ao longo de nossa trajetória
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
