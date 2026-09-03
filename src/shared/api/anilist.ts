//Низкоуровневый GraphQL-клиент

const ANILIST_API_URL = 'https://graphql.anilist.co';

type GraphQlVariables = Record<string, unknown>; //Тип - объект с ключами строками, но значение пока что неизвестно
type GraphQLError = {
  message: string;
}
type GraphQLResponse<TData> = {
  data?: TData;
  errors?:GraphQLError[];
}

export const fetchAniList = async <TData>(
  query: string,
  variables?: GraphQlVariables, //значения, которые мы отправляем AniList, чтобы подставить их в GraphQL-запрос
): Promise<TData> => {
  const response = await fetch(ANILIST_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) {
    throw new Error('AniList request failed');
  }

  const json = await response.json() as GraphQLResponse<TData>;

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }
  if (!json.data) {
    throw new Error('AniList returned empty data');
  }

  return json.data
};
