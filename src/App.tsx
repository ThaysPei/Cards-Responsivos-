import { Card, CardSkeleton } from './components/card';
import { useCards } from './hooks/useCards';
import './App.css';

function App() {
  const { cards, isLoading, error } = useCards({ simulateLoading: true, loadingDelay: 1800 });

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <p className="app__eyebrow">Component Library</p>
          <h1 className="app__title">Cards Responsivos</h1>
          <p className="app__subtitle">
            Componente React modular com variantes, skeleton loading e acessibilidade.
          </p>
        </div>
      </header>

      <main className="app__main">
        {error && (
          <div className="app__error" role="alert">
            {error}
          </div>
        )}

        <section aria-label="Cards em destaque" className="app__section">
          <h2 className="app__section-title">Featured</h2>
          <div className="card-grid card-grid--featured">
            {isLoading ? (
              <CardSkeleton variant="featured" count={1} />
            ) : (
              cards
                .filter((c) => c.variant === 'featured')
                .map((card) => <Card key={card.id} {...card} />)
            )}
          </div>
        </section>

        <section aria-label="Cards padrão" className="app__section">
          <h2 className="app__section-title">Default</h2>
          <div className="card-grid card-grid--default">
            {isLoading ? (
              <CardSkeleton variant="default" count={3} />
            ) : (
              cards
                .filter((c) => c.variant === 'default')
                .map((card) => <Card key={card.id} {...card} />)
            )}
          </div>
        </section>

        <section aria-label="Cards compactos" className="app__section">
          <h2 className="app__section-title">Compact</h2>
          <div className="card-grid card-grid--compact">
            {isLoading ? (
              <CardSkeleton variant="compact" count={2} />
            ) : (
              cards
                .filter((c) => c.variant === 'compact')
                .map((card) => <Card key={card.id} {...card} />)
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
