import { PathDirection } from '../merkle.js'
import { MerkleTreeFactory } from '../merkle-tree-factory.js'
import { StringConcat } from './string-concat.js'

const factory = new MerkleTreeFactory<string, string, string>(new StringConcat())

describe('Merkle tree direct path tests', () => {
  test('should handle the case: [A]', async () => {
    const leaves = ['A']
    const merkleTree = await factory.build(leaves)
    const directPath = merkleTree.getDirectPathFromRoot(0)
    expect(directPath).toStrictEqual([PathDirection.L])
  })

  test('should handle the case: [A]', async () => {
    const leaves = ['A', 'B', 'C', 'D']
    const merkleTree = await factory.build(leaves)

    const directPath = merkleTree.getDirectPathFromRoot(0)
    expect(directPath).toStrictEqual([PathDirection.L, PathDirection.L])
  })

  test('should handle the case: [A]', async () => {
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const merkleTree = await factory.build(leaves)

    const directPath = merkleTree.getDirectPathFromRoot(0)
    expect(directPath).toStrictEqual([PathDirection.L, PathDirection.L, PathDirection.L])
  })

  test('should handle the case: [B]', async () => {
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const merkleTree = await factory.build(leaves)

    const directPath = merkleTree.getDirectPathFromRoot(1)
    expect(directPath).toStrictEqual([PathDirection.L, PathDirection.L, PathDirection.R])
  })

  test('should handle the case: [H]', async () => {
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const merkleTree = await factory.build(leaves)

    const directPath = merkleTree.getDirectPathFromRoot(7)
    expect(directPath).toStrictEqual([PathDirection.R, PathDirection.R, PathDirection.R])
  })

  test('should handle the case: [G]', async () => {
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const merkleTree = await factory.build(leaves)

    const directPath = merkleTree.getDirectPathFromRoot(6)
    expect(directPath).toStrictEqual([PathDirection.R, PathDirection.R, PathDirection.L])
  })

  test('should handle the case: [J]', async () => {
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']
    const merkleTree = await factory.build(leaves)

    const directPath = merkleTree.getDirectPathFromRoot(8)
    expect(directPath).toStrictEqual([
      PathDirection.R,
      PathDirection.R,
      PathDirection.R,
      PathDirection.R,
    ])
  })
})
