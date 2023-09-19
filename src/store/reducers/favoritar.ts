import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  favoritos: Produto[]
}

const initialState: FavoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (p) => p.id !== produto.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
