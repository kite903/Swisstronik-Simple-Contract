// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RolexYachtMaster40 is Ownable, ERC721 {
    error NFTAlreadyMinted();
    bool private _minted;

    constructor(
        address initialOwner
    ) Ownable(initialOwner) ERC721("Rolex Yacht-Master 40", "") {}

    function mint() public onlyOwner returns (uint256) {
        if (_minted) {
            revert NFTAlreadyMinted();
        }
        _safeMint(msg.sender, 0);
        _minted = true;
        return 0;
    }
}
