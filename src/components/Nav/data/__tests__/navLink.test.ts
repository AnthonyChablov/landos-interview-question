import { describe, it, expect } from "vitest";
import { navLinks, NavLink } from "./../navLinks"; // Adjust import path as needed

describe("navLnks.ts - Nav Links Configuration", () => {
  it("should have correct number of links", () => {
    expect(navLinks.length).toBe(8);
  });

  it("should have unique ids", () => {
    const ids = navLinks.map((link) => link.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("validates link structure", () => {
    navLinks.forEach((link) => {
      expect(link).toHaveProperty("id");
      expect(link).toHaveProperty("name");
      expect(link).toHaveProperty("href");
      expect(link).toHaveProperty("type");
    });
  });

  it("validates link types", () => {
    const validTypes: NavLink["type"][] = ["regular", "gray", "black"];
    navLinks.forEach((link) => {
      expect(validTypes).toContain(link.type);
    });
  });

  it("validates href format", () => {
    navLinks.forEach((link) => {
      expect(link.href).toMatch(/^\/[a-z0-9-]*$/i);
    });
  });

  it("checks specific link properties", () => {
    const signInLink = navLinks.find((link) => link.id === "Sign in");
    const registrarLink = navLinks.find((link) => link.id === "Registrar");

    expect(signInLink).toBeDefined();
    expect(signInLink?.type).toBe("gray");
    expect(signInLink?.href).toBe("/signin");

    expect(registrarLink).toBeDefined();
    expect(registrarLink?.type).toBe("black");
    expect(registrarLink?.href).toBe("/registrar");
  });
});
