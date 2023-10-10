import { test, expect } from '@playwright/test';

test('Homeペイジレンダリンテスト', async ({ page }) => {
  // Homeペイジにアクセス
  await page.goto('http://localhost:3000');

  // 'All'タブがアクティブになっていることを確認
  await expect(page.locator('.post__navigation--active')).toHaveText('All');

  // 'All'タブをクリック該当ペイジに遷移
  await page.locator('.post__navigation--active').click();

  // かくペイジに遷移したことを確認
  const postLinks = await page.locator('.post__box a').all();

  // 各ポストのリンクをクリックして、ポストペイジに遷移
  for (const link of postLinks) {
    await link.click();

    // ポストペイジに遷移したことを確認
    await expect(page.locator('.post__title')).toHaveText('Lorem ipsum dolor sit amet');

    // ブラウザの戻るボタンをクリックして、ホームペイジに戻る
    await page.goBack();
  }

  // Footerのリンクをクリックして、該当ペイジに遷移
  await page.locator('footer a:has-text("write")').click();
  await expect(page).toHaveURL('http://localhost:3000/posts/new');

  await page.goBack();
  await page.locator('footer a:has-text("posts")').click();
  await expect(page).toHaveURL('http://localhost:3000/posts');

  await page.goBack();
  await page.locator('footer a:has-text("profile")').click();
  await expect(page).toHaveURL('http://localhost:3000/profile');
});

test('PostDetailページレンダリン', async ({ page }) => {
  // PostDetail ぺイジにアクセス
  await page.goto('http://localhost:3000/posts/0');

  // Expect post__detail クラス名を持つ要素が存在することを確認
  const postDetailElement = await page.locator('.post__detail').first();
  expect(await postDetailElement.isVisible()).toBe(true);

  // post__titleクラス名を持つ要素を取得
  const postTitleElement = await page.locator('.post__title').first();

  // post__author-nameクラス名を持つ要素が存在することを確認
  expect(await postTitleElement.isVisible()).toBe(true);

  // post__author-nameクラス名を持つ要素を取得
  const authorNameElement = await page.locator('.post__author-name').first();

  // post__author-nameクラス名を持つ要素が存在することを確認
  expect(await authorNameElement.isVisible()).toBe(true);
});


test('Postタイトルと作成者確認', async ({ page }) => {
  // PostDetail ぺイジにアクセス add
  await page.goto('http://localhost:3000/posts/0');
  // posto__titleクラス名を持つ要素のテキストを取得
  const postTitle = await page.textContent('.post__title');
  // post__author-nameクラス名を持つ要素のテキストを取得
  const authorName = await page.textContent('.post__author-name');

  // post__titleクラス名を持つ要素のテキストが正しいことを確認
  expect(postTitle).toContain('Lorem ipsum dolor sit amet');
  expect(authorName).toContain('kim');
});
