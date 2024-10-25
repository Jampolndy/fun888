import React, { useState, useEffect } from "react";
import { useGames } from "./hooks/useGames";
import { useProvider } from "./hooks/useProvider";
import HeaderImage from "./components/HeaderImage";
import Banner from "./components/Banner";
import GameList from "./components/GameList";
import SearchBar from "./components/SearchBar";
import { Game } from "./types/Game";
import { Provider } from "./types/Provider";
import "./App.css";

// Import your assets
import headerImage1 from "./assets/header_menu.png";
import headerImage2 from "./assets/header_logo.png";
import headerImage3 from "./assets/header_wallet.png";
import headerImage4 from "./assets/header_profile.png";
import startImage from "./assets/start.png";
import newImage from "./assets/new.png";
import searchImage from "./assets/search.png";
import slotsImage from "./assets/slots.png";
import liveImage from "./assets/live.png";
import jackpotsImage from "./assets/jackpots.png";
import tablegamesImage from "./assets/table.png";
import bingoImage from "./assets/Bingo.png";
import othersImage from "./assets/others.png";
import searchIcon from "./assets/search.png";
import outsideIcon from "./assets/search2.png";
import bellImage from "./assets/bell.png";
import cashierImage from "./assets/cashier.png";
import casinoliveImage from "./assets/casinolive.png";
import sportsImage from "./assets/sports.png";
import inviteImage from "./assets/invite.png";
import favoritesImage from "./assets/favorites.png";
import pragmaticImage from "./assets/PP.png";

const App: React.FC = () => {
  const { gameList, loading } = useGames();
  const { providerList, loading: providerLoading } = useProvider();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategory, setFilteredCategory] = useState<string>("START");
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [clickedCategory, setClickedCategory] = useState<string | null>(
    "START"
  );
  const [clickedFooter, setClickedFooter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Game[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null
  );

  useEffect(() => {
    if (selectedProvider) {
      setFilteredCategory("ALL");
    }
  }, [selectedProvider]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (category: string) => {
    setFilteredCategory(category);
    setClickedCategory(category);
    setShowSearchBar(category === "ALL");
  };

  const handleFooterClick = (name: string) => {
    setClickedFooter(name);
    setFilteredCategory(name === "FAVORITES" ? "FAVORITES" : name);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProvider(null);
  };

  const toggleFavorite = (game: Game) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === game.id)) {
        return prevFavorites.filter((fav) => fav.id !== game.id);
      } else {
        return [...prevFavorites, game];
      }
    });
  };

  const handleProviderSelect = (provider: Provider) => {
    setSelectedProvider(provider);
    closeModal();
  };

  const categories = [
    { name: "ALL", image: searchImage },
    { name: "START", image: startImage },
    { name: "NEW", image: newImage },
    { name: "SLOTS", image: slotsImage },
    { name: "LIVE", image: liveImage },
    { name: "JACKPOTS", image: jackpotsImage },
    { name: "TABLE GAMES", image: tablegamesImage },
    { name: "BINGO", image: bingoImage },
    { name: "OTHERS", image: othersImage },
  ];

  const footer = [
    { name: "SPORTS", image: sportsImage },
    { name: "FAVORITES", image: favoritesImage },
    { name: "INVITE", image: inviteImage },
    { name: "CASINO LIVE", image: casinoliveImage },
    { name: "CASHIER", image: cashierImage },
  ];

  const filteredGames = gameList.filter((game) => {
    const matchesCategory =
      filteredCategory === "ALL" ||
      filteredCategory === "START" ||
      (filteredCategory === "FAVORITES" &&
        favorites.some((fav) => fav.id === game.id)) ||
      game.category === filteredCategory;

    const matchesProvider = selectedProvider
      ? game.providerId === selectedProvider.id
      : true;
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesProvider && matchesSearch;
  });

  useEffect(() => {
    console.log("Selected Provider:", selectedProvider);
    console.log("Filtered Category:", filteredCategory);
    console.log("Game List Length:", gameList.length);
  }, [selectedProvider, filteredCategory, gameList]);

  return (
    <div className="app-container">
      <div className="header">
        <HeaderImage
          imageUrls={[headerImage1, headerImage2, headerImage3]}
          altTexts={[
            "First Header Image",
            "Second Header Image",
            "Third Header Image",
          ]}
          styles={[
            { marginLeft: "0px" },
            { marginLeft: "10px" },
            { marginLeft: "110px" },
          ]}
        />
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <span className="account-balance">$1990.6</span>
        </div>
        <HeaderImage
          imageUrls={[headerImage4]}
          altTexts={["Fourth Header Image"]}
          styles={[{ marginLeft: "20px", marginTop: "3px" }]}
        />
      </div>

      <Banner />

      <div className="notification-banner">
        <img
          src={bellImage}
          alt="Bell Icon"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        <span>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
      </div>

      <div className="categories-container">
        {categories.map((category, index) => (
          <React.Fragment key={category.name}>
            {index === 1 && (
              <div
                style={{
                  width: "1px",
                  height: "20px",
                  backgroundColor: "#ccc",
                  margin: "0 5px",
                }}
              />
            )}
            <div
              onClick={() => handleFilter(category.name)}
              className={`category-item ${
                filteredCategory === category.name ? "active" : ""
              }`}
            >
              {category.image && (
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    filter:
                      clickedCategory === category.name ||
                      (category.name === "START" && clickedCategory === null)
                        ? "invert(38%) sepia(91%) saturate(1074%) hue-rotate(191deg) brightness(102%) contrast(100%)"
                        : "none",
                  }}
                />
              )}
              <span>{category.name}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {showSearchBar && (
        <div className="search-bar-container">
          <SearchBar
            onSearch={handleSearch}
            icon={searchIcon}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <img
            src={outsideIcon}
            alt="Outside Icon"
            style={{
              border: "1px solid #888888",
              borderRadius: "6px",
              padding: "5px",
              width: "20px",
              height: "20px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
            onClick={openModal}
          />
        </div>
      )}

      <div className="game-list-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {filteredGames.map((game) => (
              <div
                key={game.id}
                style={{
                  width: "32.5%",
                  margin: "0px",
                  boxSizing: "border-box",
                }}
              >
                <GameList
                  games={[game]}
                  onToggleFavorite={() => toggleFavorite(game)}
                  favorites={favorites}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <img
                  src={outsideIcon}
                  alt="Outside Icon"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                />
                Game Provider
              </div>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>

            {providerLoading ? (
              <div>Loading providers...</div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "10px",
                  padding: "10px",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                {providerList.map((provider) => (
                  <div
                    key={provider.id}
                    onClick={() => handleProviderSelect(provider)}
                    style={{
                      background:
                        selectedProvider?.id === provider.id
                          ? "#D1E7DD"
                          : "#F2F2FA",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      height: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={provider.img}
                      alt={provider.name}
                      style={{ width: "90px", height: "40px" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="footer">
        {footer.map((item) => (
          <div
            key={item.name}
            onClick={() => handleFooterClick(item.name)}
            className={`footer-item ${
              clickedFooter === item.name ? "active" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "24px",
                height: "24px",
                filter:
                  clickedFooter === item.name
                    ? "invert(38%) sepia(91%) saturate(1074%) hue-rotate(191deg) brightness(102%) contrast(100%)"
                    : "none",
              }}
            />
            <span style={{ fontSize: "12px" }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
