# mySteamList

<img src="https://raw.githubusercontent.com/luckened/my-steam-app/3e60a1a704737aaf90404b60b2ad71533b07a48d/src/assets/logo.svg" alt="mySteamList" width="500px"/>


## Páginas previstas disponíveis

### home listando todos os jogos disponiveis

https://mysteamlist.vercel.app/

### páginas de jogo

https://mysteamlist.vercel.app/game/:id

### minha lista de jogos selecionados

https://mysteamlist.vercel.app/mylist

### meu perfil

https://mysteamlist.vercel.app/profile

## Endpoints da API

### endpoints para jogos
https://my-steam-list.herokuapp.com/game - (Todos os jogos)
https://my-steam-list.herokuapp.com/game/:id - (Busca pelo ID - Exemplo: https://my-steam-list.herokuapp.com/game/12)
https://my-steam-list.herokuapp.com/game/steam/:steamId - (Busca pelo SteamId - Exemplo: https://my-steam-list.herokuapp.com/game/steam/570)
https://my-steam-list.herokuapp.com/game/name/:name (Busca por Nome - Exemplo: https://my-steam-list.herokuapp.com/game/name/Company%20of%20Heroes%202)

### endpoints para as tags dos jogos
https://my-steam-list.herokuapp.com/tag - (Todas as tags)
https://my-steam-list.herokuapp.com/tag/FPS - (Busca por Nome - Exemplo: https://my-steam-list.herokuapp.com/tag/FPS)

### endpoints para os ratings de jogos
https://my-steam-list.herokuapp.com/rating - (Todas os ratings)

https://my-steam-list.herokuapp.com/rating/:id - (Busca pelo id do rating - Exemplo: https://my-steam-list.herokuapp.com/rating/1)

https://my-steam-list.herokuapp.com/rating/client/:id - (Busca pelo id do cliente - Exemplo: https://my-steam-list.herokuapp.com/rating/client/1)

https://my-steam-list.herokuapp.com/rating/game/:id - (Busca pelo id do jogo - Exemplo: https://my-steam-list.herokuapp.com/rating/game/1)

### endpoints para os clientes

https://my-steam-list.herokuapp.com/client - (Todos os clientes)

https://my-steam-list.herokuapp.com/client/:id - (Busca pelo id do cliente - Exemplo: https://my-steam-list.herokuapp.com/client/76)
