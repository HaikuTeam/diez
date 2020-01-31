import Foundation
import CoreGraphics
@objc(DEZReference)
public final class Reference: NSObject, Decodable {
    @objc public internal(set) var something: String

    convenience override init() {
        self.init(
            something: "this is a reference"
        )
    }

    init(
        something: String
    ) {
        self.something = something
    }
}

extension Reference: ReflectedCustomStringConvertible {
    public override var description: String {
        return reflectedDescription
    }
}
