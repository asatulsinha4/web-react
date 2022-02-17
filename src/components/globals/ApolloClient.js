import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://localhost:8080/graphql',
});

export const client = new ApolloClient({
    link: from([
        httpLink,
    ]),
    cache: new InMemoryCache()
});
