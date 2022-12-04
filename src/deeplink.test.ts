import { describe, expect, it, vi } from "vitest";

import { deeplink } from "./deeplink";

// const message = "Yay, testing!";

describe("deeplink", () => {
	it("throws an error if a loginUrl is not provided", async () => {
		await expect(() => deeplink("")).rejects.toThrow("loginUrl is required");
	});

	// it("does stuff", async () => {
	// 	await expect(() => deeplink("/login"))..toThrow("loginUrl is required");
	// });

	// it("logs to the console once when message is provided as a string", () => {
	// 	const logger = vi.spyOn(console, "log").mockImplementation(() => undefined);

	// 	greet(message);

	// 	expect(logger).toHaveBeenCalledWith(message);
	// 	expect(logger).toHaveBeenCalledTimes(1);
	// });

	// it("logs to the console once when message is provided as an object", () => {
	// 	const logger = vi.spyOn(console, "log").mockImplementation(() => undefined);

	// 	greet({ message });

	// 	expect(logger).toHaveBeenCalledWith(message);
	// 	expect(logger).toHaveBeenCalledTimes(1);
	// });

	// it("logs once when times is not provided in an object", () => {
	// 	const logger = vi.fn();

	// 	greet({ logger, message });

	// 	expect(logger).toHaveBeenCalledWith(message);
	// 	expect(logger).toHaveBeenCalledTimes(1);
	// });

	// it("logs a specified number of times when times is provided", () => {
	// 	const logger = vi.fn();
	// 	const times = 7;

	// 	greet({ logger, message, times });

	// 	expect(logger).toHaveBeenCalledWith(message);
	// 	expect(logger).toHaveBeenCalledTimes(7);
	// });
});
