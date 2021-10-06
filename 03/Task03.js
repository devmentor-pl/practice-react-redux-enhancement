// Twoim zadaniem jest napisać rozwiązanie, które pozwoli wyświetlić wszystkie repozytoria danego użytkownika na GitHubie oraz móc je przefiltrować tj. wyświetlić tylko takie, które zawierają dany ciąg znaków.

// Do pobrania danych będziesz musiał wykorzystać GitHub API, a nazwę użytkownika i wyszukiwarkę pobierasz z inputa.

// Stan aplikacji masz przechowywać w state zarządzanym przez Redux-a dlatego będziesz musiał przygotować sobie jego konfigurację oraz DevTools.

// Ponieważ chcesz, aby Twoje rozwiązanie dało się w łatwy sposób przenieść do innego projektu wszystkie pliki dot. tego rozwiązania będziesz przechowywał w katalogu ./src/modules/github:

// index.js - import/export niezbędnych elementów
// github.js - główny komponent
// github.reducer.js - Reduktor dla Redux-a
// github.actions.js - Akcje dla Redux-a
// github.types.js - nazwy dla Akcji
// github.api.js - zarządzenia API (częściowo napisane)

import React from 'react';
import ReposBrowser from '../src/modules/github';

const Task03 = () => {
	return <ReposBrowser />;
};

export default Task03;

