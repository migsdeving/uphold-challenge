import SDK from "@uphold/uphold-sdk-javascript";

export const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: "foo",
  clientSecret: "bar",
});

export const debounce = (func: () => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};
