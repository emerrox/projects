// @ts-check
import { test, expect } from '@playwright/test';

test('enseña gatetes', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Obtiene los elementos usando el selector por rol
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');
  const btn = await page.getByRole('button');

  // Verifica que el texto tenga contenido
  const textContent = await text.textContent();
  await expect(textContent?.length).toBeGreaterThan(0);

  // Obtiene el src de la imagen antes de hacer clic
  const imageSrc = await image.getAttribute('src');

  // Hace clic en el botón
  await btn.click();

  // Obtiene el src de la imagen después de hacer clic
  const newImageSrc = await image.getAttribute('src');

  // Muestra los src en consola
  console.log('Imagen original:', imageSrc);
  console.log('Nueva imagen:', newImageSrc);

  // Verifica que el src de la imagen cambie después del clic
  await expect(imageSrc).not.toBe(newImageSrc);
});
