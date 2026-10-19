import { describe, it, expect } from 'vitest';
import { HowestRestoClient, CAMPUSES } from '../src/index.js';

describe('HowestRestoClient', () => {
  const client = new HowestRestoClient();

  it('lists all 6 Howest campuses', () => {
    const campuses = client.getCampuses();
    expect(campuses.length).toBe(6);
    const codes = campuses.map((c) => c.code);
    expect(codes).toContain('GKG');
    expect(codes).toContain('RSS');
    expect(codes).toContain('PENTA');
    expect(codes).toContain('SIC');
    expect(codes).toContain('TS');
    expect(codes).toContain('RSS1');
  });

  it('throws error for unknown campus code', async () => {
    await expect(client.getMenu({ campus: 'INVALID_CODE' })).rejects.toThrow('Unknown campus');
  });
});
