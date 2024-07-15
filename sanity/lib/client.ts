import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  token: "skKev08tx861mE8lS5MvBBYoDrK17uwLGSzBJzla41f6XTA66lsYBMufXGzT3HjIrjme0lc0yw3vOcCh7Zc7CenADxVq21GKXWUMuRcrLRx2pp5zfx74p54y93QZKjGbAFXXmLaI0OSy25ceL98LOuZcrdw73lrCMoIdv1sxy41tVGcT7uzx"
})
