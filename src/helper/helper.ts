export async function delay(ms: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, parseInt(ms));
  });
}
